import Link from "next/link";

export const Header = ({ title }: { title: string }) => {

    const buttonClasses = "py-1.5 px-3 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 transition cursor-pointer border-[1px] border-gray-300"
  return (
    <div
        className="flex justify-between items-center px-4 py-2 border-b-[1px] border-gray-200 pe-9"
    >
      <h3
        className="text-2xl font-semibold "
      >{title}</h3>

      <Link 
      href="/dashboard"
        className={`${buttonClasses}`}
      >Home</Link>
    </div>
  );
}
