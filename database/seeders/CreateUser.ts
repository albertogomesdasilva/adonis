import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public static developmentOnly = false

  public async run() {
    await User.create({
      email: 'albertogomesdasilva@gmail.com',
      password: '123456',
      role: 'admin',
    })
    await User.createMany([
      {
        email: 'admin@admin.com',
        password: 'admin',
        role: 'admin',
      },
      {
        email: 'del@gmail.com',
        password: '123456',
        role: 'normal',
      },
    ])
  }
}
