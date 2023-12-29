const DashBoard = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${todos.id}`,
    { cache: 'no-store' }
  );
  const data = await res.json();

  return (
    <section className='grid grid-cols-6 gap-x-6 gap-y-3'>
      <div className='col-span-full space-y-3 lg:col-span-4'>
        <h1 className='truncate text-2xl font-medium capitalize text-gray-200'>
          {data.title}
        </h1>
        <p className='font-medium text-gray-500'>{data.body}</p>
      </div>
    </section>
  );
};

export default DashBoard;
