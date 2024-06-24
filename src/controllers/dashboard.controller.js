import { error } from 'console';
import fs from 'fs';
import path from 'path';

export class DashboardController {
  static readFileContent = async (filePath) => {

    try {
      const data = await fs.promises.readFile(filePath, 'utf8');
      return { error: false, data };
    } catch (err) {
      if (err.code === 'ENOENT') {
        return { error: true, data: "0" };
        //return res.status(404).json({ error: 'File not found' });
      }
      console.log("error", err);
      return { error: true, data: "-1" };
      //res.status(500).json({ error: err.message });
    }
  };
  static writeFileContent = async (filePath, fileData) => {
    console.log("fileData", fileData);
    try {
      const data = await fs.promises.writeFile(filePath, fileData.toString(), 'utf8');
      return;
    } catch (err) {
      console.log("error", err);
      return;
      //res.status(500).json({ error: err.message });
    }
  }
  static saveInputs = async (req, res, next) => {
    try {
      let { inputNumber } = req.body;
      let folderPath = process.env.CONFIG_PATH;
      inputNumber = inputNumber ? inputNumber * 7 : inputNumber;

      const fileA = path.join(folderPath, 'fileA.txt');
      const fileB = path.join(folderPath, 'fileB.txt');
      const fileC = path.join(folderPath, 'fileC.txt');
      const fileD = path.join(folderPath, 'fileD.txt');
      let fileContentA = await this.readFileContent(fileA);
      let fileContentB = await this.readFileContent(fileB);
      let fileContentC = await this.readFileContent(fileC);
      let fileContentD = await this.readFileContent(fileD);

      if (!fileContentA.error && !fileContentB.error && !fileContentC.error && !fileContentD.error) {
        res.status(200).send({
          "error": false,
          "message": "You can't enter any new Numbers now",
          "data": { fileA: fileContentA?.data, fileB: fileContentB.data, fileC: fileContentC.data, fileD: fileContentD.data }
        });
        res.end();

        return;
      }

      //console.log("inputNumber", inputNumber);
      if (inputNumber >= 140) {
        await this.writeFileContent(fileA, inputNumber);
      }
      else if (inputNumber >= 100 && inputNumber < 140) {
        await this.writeFileContent(fileB, inputNumber);
      }
      else if (inputNumber >= 60 && inputNumber < 100) {
        await this.writeFileContent(fileC, inputNumber);
      }
      else {
        await this.writeFileContent(fileD, inputNumber);
      }

      res.status(200).send({
        "error": false,
        "message": "Success",
        "data": {}
      });
      res.end();
    } catch (err) {
      console.log("error", err);
      res.status(500).send({
        "error": true,
        "message": "Internal Server Error",
        "data": {}
      });
      res.end();
    }
  };


}
