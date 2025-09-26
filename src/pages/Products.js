import { NavLink, Outlet, useSearchParams } from "react-router-dom"



import ProductsList from '../data/product.js';



export default function Products() {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("q") ?? "";
    const list = ProductsList.filter(p =>
        p.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );


    return (
        <div className="grid">
            <aside>
                <input type="text" placeholder="Поиск" value={filter} onChange={e => setSearchParams(e.target.value ? { q: e.target.value } : {})} />
                <ul>
                    {list.map(p => (
                        <li key={p.id}>
                            <NavLink to={p.id} className={({ isActive }) => (isActive ? "active" : undefined)}>
                                {p.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <section>
                <Outlet />
                
            </section>
        </div>
    )

}