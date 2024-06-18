import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";


const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:<>/?";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbol, setIncludeSymbol] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const copyText = async(coupon: string) => {
    await window.navigator.clipboard.writeText(coupon)
    setIsCopied(true)
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!includeNumbers && !includeCharacters && !includeSymbol) return alert("Please Select One At Least");

    let result:string = prefix || ""
    const loopLength:number = size-result.length
    for (let i = 0; i < loopLength; i++) {
     let entireString:string = ""
     if(includeCharacters) entireString+=letters
     if(includeNumbers) entireString+=numbers
     if(includeSymbol) entireString+=symbols

     const randomNum: number = ~~(Math.random()*entireString.length)
      result+=entireString[randomNum]
    }

    setCoupon(result)

  };

  useEffect(()=>{setIsCopied(false)},[coupon])

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="dashboardAppContainer">
        <h1>Coupon Generator</h1>
        <section>
          <form className="couponForm" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Prefix Text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />
            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers((p) => !p)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => setIncludeCharacters((p) => !p)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSymbol}
                onChange={() => setIncludeSymbol((p) => !p)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
