import { ethers, Contract } from 'ethers';
import { useEffect, useState } from 'react';
import greeterAbi from '../../smart_contract/artifacts/contracts/Greeter.sol/Greeter.json';

const greetAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // localhost
// const greetAddress = '0xCc793a90c09b22e81dbc0f5aCa5AC9b784512676'; // ropsten

const getGreet = async () => {
  if (typeof window === 'undefined') return;
  // metamaskを介してネットワークノードとの通信をするオブジェクトを作成する
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // アドレス、ABI, プロバイダを指定してコントラクトオブジェクトを作成
  // コントラクトの状態を変化させる(gas代が必要な）操作をするためには場合はSignerを与える必要がある
  const greetContract = new Contract(
    greetAddress,
    greeterAbi.abi,
    provider,
  ).connect(provider.getSigner(0));

  return await greetContract.greet();
};

const setGreeting = async (value) => {
  if (typeof window === 'undefined') return;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const greetContract = new Contract(
    greetAddress,
    greeterAbi.abi,
    provider,
  ).connect(provider.getSigner(0));

  // setGreetingメソッドを呼び出し
  greetContract.setGreeting(value);
};

export const useGreet = () => {
  const [greet, setGreet] = useState('');

  // greetを取得して、状態として保持する
  useEffect(() => {
    if (typeof window === 'undefined') return;
    console.log('useGreet');
    const fetchData = async () => {
      // greetメソッドを呼び出し
      const greetFetched = await getGreet();
      console.log('greetFetched', greetFetched);
      setGreet(greetFetched);
    };

    fetchData().catch((e) => console.log(e));
  }, []);

  return { greet, setGreeting };
};
