import { Router } from 'express'
import { getSettings, updateSttings } from '../controllers/sttings.controller'

const router = Router()

router.get('/', getSettings)

router.post('/', updateSttings)

export default router
