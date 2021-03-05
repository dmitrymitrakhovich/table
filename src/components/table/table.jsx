import React from "react";

import "./table.sass";
import filterIcon from './filter.svg'
import sortIcon from './sort.svg'


const Table = ({tableData = []}) => {
  return (
    <div class="table">
      <table class="table-component">
        <thead>
          <tr>
            <th>
              <div className="wrap">
                <div className="title">Весы</div>
                <div className="sort"><img src={sortIcon} alt="sort"/></div>
                <div className="filter"><img src={filterIcon} alt="filter"/></div>
              </div>
            </th>

            <th>
              <div className="wrap">
                <div className="title">Дата</div>
                <div className="sort"><img src={sortIcon} alt="sort"/></div>
                <div className="filter"><img src={filterIcon} alt="filter"/></div>
              </div>
            </th>

            <th>
              <div className="wrap">
              <div className="title">Время</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              <div className="filter"><img src={filterIcon} alt="filter"/></div>
              </div>
            </th>

            <th>
              <div className="wrap">
              <div className="title">Оператор</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              <div className="filter"><img src={filterIcon} alt="filter"/></div>
              </div>
            </th>

            <th>
              <div className="wrap">
              <div className="title">Линия</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              <div className="filter"><img src={filterIcon} alt="filter"/></div>
              </div>
            </th>

            <th>
              <div className="wrap">
              <div className="title">Изделие</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              <div className="filter"><img src={filterIcon} alt="filter"/></div>
              </div>
            </th>

            <th>
              <div className="wrap" >
              <div className="title">Еденица <br/> измерения</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              </div>
            </th>

            <th>
              <div className="wrap">
              <div className="title">Мин. <br/> предел</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              </div>
            </th>

            <th>
              <div className="wrap">
              <div className="title">Макс. <br/> предел</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              </div>
            </th>

            <th colspan="2">
              <div className="wrap">
              <div className="title">Отклонение / %</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              </div>
            </th>
            <th>
              <div className="wrap">
              <div className="title">Результат</div>
              <div className="sort"><img src={sortIcon} alt="sort"/></div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* scales, date, time, operator, line, products, ed, max, min, deviation, result */}
          
            {tableData.map(() => {
              return (
              <tr>
                <td>{tableData.scales}</td>
                <td>{tableData.date}</td>
                <td>{tableData.time}</td>
                <td>{tableData.operator}</td>
                <td>{tableData.line}</td>
                <td>{tableData.products}</td>
                <td>{tableData.ed}</td>
                <td>{tableData.min}</td>
                <td>{tableData.max}</td>
                <td>{tableData.deviation}</td>
                <td>{tableData.percent}</td>
                <td>{tableData.result}</td>
              </tr>
              )})}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
