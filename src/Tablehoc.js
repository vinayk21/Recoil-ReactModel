import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { FaEye } from 'react-icons/fa';

const Tablehoc = ({ mapss, tableHader }) => {
  const [filtertable, setFiltertable] = useState('');
  const [sortedData, setSorteddata] = useState(null);
  const [visiblePasswords, setVisiblePasswords] = useState({}); 
  const [val, btn] = mapss();
  const itemaccanding = [...val];
  const itemdeccanding = [...val];

  const valapp = () => {
    const filtt = val?.filter((ss) => ss.Email.includes(filtertable.toLowerCase()));
    itemaccanding?.sort((a, b) => a.Email.localeCompare(b.Email));
    itemdeccanding?.sort((a, b) => b.Email.localeCompare(a.Email));

    if (sortedData === 'a-z') {
      return itemaccanding;
    } else if (sortedData === 'z-a') {
      return itemdeccanding;
    } else if ((sortedData === 'a-z' || sortedData === 'z-a') && filtt) {
      return filtt;
    } else if (filtt) {
      return filtt;
    } else {
      return val;
    }
  };

  const togglePasswordVisibility = (index) => {
    const updatedVisiblePasswords = { ...visiblePasswords };
    updatedVisiblePasswords[index] = !updatedVisiblePasswords[index];
    setVisiblePasswords(updatedVisiblePasswords);
  };

  return (
    <>
      <table id="customerinfo">
        <thead>
          <tr>
            {tableHader?.map((rr, index) => {
              return (
                <>
                  <th key={index}>{rr}</th>
                </>
              );
            })}
            <input type='text' style={{ margin: '1em' }} value={filtertable} onChange={(e) => setFiltertable(e.target.value)} />
            <select id='sortin' onChange={(e) => setSorteddata(e.target.value)} value={sortedData}>
              <option value={''}>SelectAny</option>
              <option value={'a-z'}>A-z</option>
              <option value={'z-a'}>Z-A</option>
            </select>
          </tr>
        </thead>
        <tbody>
          {valapp()?.map((el, index) => {
            let keys = Object.values(el);
            let k = Object.keys(el);
            let cc = keys[0].split('@');
            let bb = `${cc[0]}@...`;
            return (
              <>
                <Tooltip id={`my-tooltip-${index}`} />
                <tr key={index}>
                  {keys?.map((ee, subIndex) => {
                    if (subIndex < 1) {
                      return (
                        <>
                          <td key={subIndex} data-tooltip-id={`my-tooltip-${index}`} data-tooltip-content={bb} data-tooltip-place="top">
                            {bb}
                          </td>
                        </>
                      );
                    } else if (subIndex === 3) {
                      return (
                        <td
                          key={subIndex}
                          data-tooltip-id={`my-tooltip-${index}`}
                          data-tooltip-content={visiblePasswords[index] ? '****' : ee}
                          data-tooltip-place="top"
                        >
                          {visiblePasswords[index] ? '*****' : ee}
                          <FaEye onClick={() => togglePasswordVisibility(index)} />
                        </td>
                      );
                    } else {
                      return (
                        <>
                          <td key={subIndex} data-tooltip-id={`my-tooltip-${index}`} data-tooltip-content={ee} data-tooltip-place="top">
                            {ee}
                          </td>
                        </> 
                      );
                    }                                                                                                                                                                                                                                       
                  })}
                  <td key="action" data-tooltip-id={`my-tooltip-${index}`} data-tooltip-content={keys[2]} data-tooltip-place="top">
                    {btn}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Tablehoc;
