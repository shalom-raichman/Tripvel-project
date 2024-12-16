import { NextFunction, Request, Response } from 'express'
import {getSettings as getSettingsService, patchSettings} from '../services/settings.service'

export const getSettings = async (req: Request, res: Response, next: NextFunction) => {
  res.json(await getSettingsService())
  try {
  } catch (err) {
    console.error(`Can't update settings ${err}`)
  }
}

export const updateSttings = async (req: Request, res: Response, next: NextFunction) => {
  res.json(await patchSettings(req.body))
  try {
  } catch (err) {
    console.error(`Can't update settings ${err}`)
  }
}
