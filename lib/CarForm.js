export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form className="flex flex-col space-y-5 w-96" onSubmit={handleSubmit}>
      Make: <input className="border-black border-2 w-40" name="make" type="text" />
      Model: <input className="border-black border-2 w-40" name="model" type="text" />
      Image URL:<input className="border-black border-2 w-40" name="image" type="text" />
      Comment: <textarea className="border-black border-2 w-40" name="description" type="text" />

      <button className="border-black border-2" type="submit">Create Car</button>

      <a href="/search">Search</a>
    </form>
  );
}
