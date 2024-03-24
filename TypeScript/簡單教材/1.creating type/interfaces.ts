///////////Creating interfaces///////////////

interface ColoredButtonProps extends ButtonProps {
  color: string;
}


//用於函數
interface Log {
  (message: string): void;
}

const log = (message: string) => {
  console.log(message);
};

const log2: Log = (message) => {
  console.log(message);
};

// declaration merging
// 重複命名會合併-聲明合併的過程中合併同名的介面
// 但是容易混淆 所以還是建議不要重複命名
