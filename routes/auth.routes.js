const { Router } = require('express')
const router = Router()

router.post('/register', async (reg, res) => {
  try {
    const { email, password } = reg.body
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так ;(' })
  }
})

router.post('/login', async (reg, res) => {})

module.exports = router
