import React from "react";
import ReactDOM from "react-dom/client";
import { IgrExcelXlsxModule } from "igniteui-react-excel";
import { IgrExcelCoreModule } from "igniteui-react-excel";
import { IgrExcelModule } from "igniteui-react-excel";
import { IgrSpreadsheetModule } from "igniteui-react-spreadsheet";
import { IgrSpreadsheet } from "igniteui-react-spreadsheet";
import { ExcelUtility } from "./util";

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

IgrSpreadsheetModule.register();

export const SpreadsheetOverview = () => {
  let spreadsheet: IgrSpreadsheet = new IgrSpreadsheet({});

  const openFile = (selectorFiles: FileList) => {
    if (selectorFiles != null && selectorFiles.length > 0) {
      ExcelUtility.load(selectorFiles[0]).then(
        (w) => {
          console.log("wwwwwwww", w);

          spreadsheet.workbook = w;
        },
        (e) => {
          console.error("Workbook Load Error");
        }
      );
    }
  };

  const onSpreadsheetRef = (spreadsheetParams: IgrSpreadsheet) => {
    if (!spreadsheetParams) {
      return;
    }

    spreadsheet = spreadsheetParams;

    const url =
      "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    ExcelUtility.loadFromUrl(url).then((w) => {
      spreadsheet.workbook = w;
    });
  };

  return (
    <div className="container sample">
      <div className="options horizontal">
        <input
          type="file"
          onChange={(e) => openFile(e.target.files as FileList)}
          accept=".xls, .xlt, .xlsx, .xlsm, .xltm, .xltx"
        />
      </div>
      {/* eslint-disable-next-line @typescript-eslint/unbound-method */}
      <IgrSpreadsheet
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref={onSpreadsheetRef}
        height="calc(100% - 30px)"
        width="100%"
      />
    </div>
  );
};
