import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class FirstUserSeeder extends BaseSeeder {
  public static developmentOnly = false

  public async run() {
    await User.create({
      email: 'albertogomesdasilva@gmail.com',
      password: '123456',
    })
  }
}
