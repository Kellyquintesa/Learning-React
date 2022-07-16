function Header() {
  const title = "Welcome to my App";
  const age = 20;
  const link = "https://kellyquintesa.netlify.app";

  const clickMe = (name) => {
    console.log("hello " + name);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{age}</p>
      <a href={link}>
        <button>Go to my website</button>{" "}
      </a>
      <br />
      <br />
      <button onClick={() => clickMe("Kelly")}>Click Me</button>
    </div>
  );
}

export default Header;
