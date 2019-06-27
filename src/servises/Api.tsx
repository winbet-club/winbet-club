import axios from 'axios';

class AppApi {
  private apiUrl = 'https://winbet-belarus-jp.amegt.com';
  
  public async getJackpots() {
    const url: string = `${this.apiUrl}/jpstatus.json`;

    try {
      return await axios.get(url);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const Api = new AppApi();
