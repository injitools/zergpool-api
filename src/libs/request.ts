import {RequestOptions, request} from "http";

export default function (options: RequestOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = request(options, (res) => {
      let response = ''

      res.on('data', (chunk) => {
        response += chunk
      });

      res.on('end', () => resolve(response));
    });

    req.on('error', (e) => {
      console.error(e)
      reject(e)
    });

    req.end();
  })
}
