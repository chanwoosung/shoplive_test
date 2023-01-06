import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { Button } from "./Button";

export function SearchBar() {
    const {
        register,
        handleSubmit,
    } = useForm();
    
    const [searchParams, setSearchParams] = useSearchParams();
    const search = new URLSearchParams(window.location.search).get("search");
    useEffect(()=>{
        if(search === '' || search === undefined) return
    },[search]);

    const onSearch = handleSubmit(data => {
        searchParams.set('search', data.search);
        setSearchParams(searchParams)
    });

    return (
        <form onSubmit={onSearch}>
            <input className="border border-slate-500" placeholder="검색" {
                ...register('search',{
                value: search
                })
            }/>
            <Button text="검색" />
        </form>
    )
}