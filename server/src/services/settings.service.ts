import { SettingsModel } from '../models/settingsModel'
import { Setting } from '../types/models'

export const getSettings = async () => {
  try {
    return await SettingsModel.findOne({}).lean()
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const patchSettings = async (newSettings: Setting) => {
  try {
    return await SettingsModel.findOneAndUpdate({}, { $set: newSettings }).lean()
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const sid = async () => {
  try {
    const firstDoc = new SettingsModel({})
    await firstDoc.save()
  } catch (err) {
    console.error(err)
    throw err
  }
}