import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  function handleSubmit() {
    if (checked == false) {
      alert('Please agree to terms and conditions first');
      return;
    }
    if (email.length == 0) {
      alert('Please provide email first');
      return;
    }
    if (password.length == 0) {
      alert('Please provide password first');
      return;
    }
    const data = {
      email_address: email,
      secret_password: password,
      is_checked: checked,
    };
    console.log(data);
  }

  return (
    <div className="h-screen w-full bg-gray-200 flex flex-col justify-center items-center">
      <div className="w-96 p-10 rounded-lg border-2 border-gray-300 bg-white">
        <div className="text-lg font-semibold flex justify-center">Welcome</div>
        <div className="text-xs flex justify-center">
          We have missed you very much
        </div>

        <div className="w-full flex flex-col gap-3 mt-5">
          <input
            className="w-full px-3 py-1 bg-gray-200 rounded"
            placeholder="Email address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full px-3 py-1 bg-gray-200 rounded"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-2">
            <input
              type="checkbox"
              value={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <p className="text-xs">I agree to usage terms & conditions</p>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-black w-24 text-white rounded py-2 mx-auto"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
