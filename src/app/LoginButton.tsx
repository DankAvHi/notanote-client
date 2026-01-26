"use client";

export const LoginButton = () => {
  const login = async () => {
    const res = await fetch("https://localhost:8000/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: "test", password: "TestTest1!" }),
      credentials: "include",
    });

    if (!res.ok) {
      alert("login failed");
      return;
    }

    // window.location.reload();
  };
  return (
    <button onClick={login} className="px-3 py-1 bg-gray-500 rounded-sm">
      log in
    </button>
  );
};
