'use client'

import { baseURL } from '@/lib/constants';
import { useState, useEffect } from 'react';

const ConversionPage = () => {
  const [token, setToken] = useState();
  const [uids, setUids] = useState([]);
  const [data, setData] = useState<any[]>([]);
  const [warning, setWarning] = useState(false);

  async function getAvailbleToken() {
    const response = await fetch(`${baseURL}/accounts/available`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const body = await response.json();
    if (response.ok) {
      setToken(body.Token);
    } else {
      // handle error
    }
  }

  async function convert() {
    const response = await fetch(`${baseURL}/conversions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Token: token,
        UIDs: uids,
      }),
    });
    const body = await response.json();
    if (response.ok) {
      setData(body);
    } else {
      // handle error
    }
  }

  function onChangeInput(e: React.ChangeEvent<any>) {
    var splitedUids = e.target.value.split('\n');
    const totalInputUids = splitedUids.length;
    if (totalInputUids > 100) {
      setWarning(true);
      splitedUids = splitedUids.slice(0, 100 - totalInputUids);
    } else {
      setWarning(false);
    }
    setUids(splitedUids);
  }

  useEffect(() => {
    getAvailbleToken();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 w-full space-y-4">
        <div>
          <h1 className="text-xl font-bold">Chuyển đổi</h1>
          <p className="text-sm">Nhập tối đa 100 dòng, sẽ tự cắt bớt nếu nhập dư</p>
        </div>
        <textarea className='w-full h-96 p-2 border rounded focus:outline-blue-600' onChange={onChangeInput}></textarea>
        <button className="block p-2 rounded bg-blue-600 hover:bg-blue-700 text-white" onClick={convert}>Chuyển đổi</button>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">STT</th>
              <th scope="col" className="py-3 px-6">UID</th>
              <th scope="col" className="py-3 px-6">SĐT</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) =>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{item.UID}</td>
                <td className="py-4 px-6">{item.Phone}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ConversionPage;
