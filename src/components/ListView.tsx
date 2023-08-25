import React, { useEffect, useState } from "react";

function ListView({triggerFindFetch,getFect,setGetFect}:ListViewInterface) {
    const [cars, setCars] = useState<FormDataType[]>([]);
    const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
        const id = event.currentTarget.getAttribute('data-id');
        if (id) triggerFindFetch(id);
    }

    const loadCars = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/car", {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch car");
            }
            return res.json();
        } catch (error) {
            console.log("Error loading car: ", error);
        }
    };

    const removeCar = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const confirmed = confirm("Are you sure?");
        const id = event.currentTarget.getAttribute('data-id');
        if (confirmed && id) {
            const res = await fetch(`http://localhost:3000/api/car?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                const fetchedCars = await loadCars();
                setCars(fetchedCars);
            }
        }
    };
    
    useEffect(() => {
        const fetchData = async() =>{
            const fetchedCars = await loadCars();
            setCars(fetchedCars);
        }
        fetchData(); 
        if(getFect){
            fetchData(); 
            setGetFect(false);
        }
    }, [getFect]);

    return (
        <div className="list-view ">
            <table className="w-full text-sm text-left text-gray-500 bg-slate-100 rounded-lg shadow-md max-h-[400px] overflow-auto">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        <th scope="col" colSpan={4} className="px-6 py-3">
                            <span className="text-xl">List View</span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            <div className="flex justify-end">
                                <button className=" py-2 px-4 bg-green-400 rounded-md text-slate-100 float-left shadow">Add</button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-center max-h-64">
                    {cars.length > 0 ? (
                        cars.map((c) => (
                            <tr className="bg-white border-b" key={c._id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                    {c.make}
                                </th>
                                <td className="px-6 py-4">{c.name}</td>
                                <td className="px-6 py-4">{c.colour}</td>
                                <td className="px-6 py-4">{c.code}</td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end">
                                        <button className="py-2 px-3 bg-rose-500 rounded-md mr-2 text-slate-100 shadow" data-id={c._id} onClick={removeCar}>
                                            Delete
                                        </button>
                                        <button className="py-2 px-4 bg-sky-400 rounded-md text-slate-100 shadow" data-id={c._id} onClick={handleEdit}>
                                            Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="py-4 text-gray-500">
                                {cars.length === 0 ? "No cars found." : "Loading..."}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListView;

