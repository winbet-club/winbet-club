import axios from 'axios';

class AppApi {
  private apiUrl = 'https://winbet-belarus-jp.amegt.com';
  private url = 'http://37.17.76.10:6667/jackpots.php';
  
  public async getJackpots() {
    const url: string = `${this.apiUrl}/jpstatus.json`;

    try {
      return await axios.get(url);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getAdditionalJackpots() {

    try {
      return await axios.get(this.url);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const Api = new AppApi();
