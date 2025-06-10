const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth'); // ✅ Middleware JWT

// 📦 Guardar pedido (POST)
router.post('/', auth, async (req, res) => {
  try {
    console.log('👉 Pedido recibido por el backend');
    console.log('🧾 Cuerpo completo recibido:', req.body);

    if (!req.body.items || !Array.isArray(req.body.items) || req.body.items.length === 0) {
      console.warn('⚠️ Pedido inválido o vacío:', req.body);
      return res.status(400).json({ error: 'El pedido está vacío o mal formado' });
    }

    const newOrder = new Order({
      items: req.body.items,
      user: req.userId // ✅ Asocia el pedido al usuario
    });

    await newOrder.save();
    console.log('✅ Pedido guardado en MongoDB:', newOrder);

    res.status(201).json({ message: 'Pedido guardado correctamente' });
  } catch (err) {
    console.error('❌ Error al guardar el pedido:', err);
    res.status(500).json({ error: 'Error al guardar el pedido' });
  }
});

// 📜 Ver pedidos del usuario autenticado (GET)
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error('❌ Error al obtener los pedidos:', err);
    res.status(500).json({ error: 'Error al obtener los pedidos' });
  }
});

module.exports = router;