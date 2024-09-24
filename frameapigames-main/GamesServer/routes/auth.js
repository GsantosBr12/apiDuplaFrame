const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verificar se o email já está em uso
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o novo usuário
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});

// Rota para login de usuário
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    // Gerar um token JWT
    const token = jwt.sign({ id: user.id, role: user.role }, 'secreta', { expiresIn: '1h' });

    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

// Middleware para proteger rotas (apenas exemplo, opcional)
const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'secreta', (err, user) => {
      if (err) return res.status(403).json({ error: 'Token inválido' });

      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ error: 'Acesso negado' });
      }

      req.user = user;
      next();
    });
  };
};

// Exportar as rotas e o middleware (se necessário)
module.exports =  router;
  