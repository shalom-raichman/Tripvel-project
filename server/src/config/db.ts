import { connect } from 'mongoose'
import { SettingsModel } from '../models/settingsModel'
import { sid } from '../services/settings.service'

export const connectToMongo = async () => {
  try {
    await connect('mongodb://localhost/tripvel')
    console.log('[database] mongo successfuly conencted')
    const settings = await SettingsModel.findOne()
    if(!settings) {
      await sid()
      console.log('[database] sid created')
    }
  } catch (err) {
    console.error(err)
  }
}