import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { dateTimeToYYYYMMDD } from "../util";
import { Button } from "./Button";

export function ItemCardInfo({item, onClickRemove,onToggleEdit}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const highLightText = useCallback((title='',search='') => {
        const index = title.indexOf(search);
        return (
            <span>
                {item.title.substr(0, index)}
                <span className="bg-green-500 font-bold text-lg text-red-600">{title.substr(index, search.length??0)}</span>
                {item.title.substr(index + (search.length??0), title.length??0)}
            </span>
        )
    },[])
    
    return (
        <div className="rounded-b-md desktop:rounded-none p-3 flex my-auto bg-black desktop:bg-transparent opacity-50 desktop:opacity-100 desktop:w-full justify-between">
            <div className="w-full flex gap-2">
                <div className=" flex flex-col-reverse w-full">
                    <span className="text-[#808080] text-base hidden desktop:block">LIKE : {item.likeCount}</span>
                    <span className="text-white desktop:text-black">{searchParams.get("search")===null?item.title:highLightText(item.title,searchParams.get("search"))}</span>
                    <span className="text-[#808080] text-base">{dateTimeToYYYYMMDD(item.createdAt)}</span>
                </div>
                <div className="desktop:flex justify-center hidden">
                    <Button text="수정" onclick={onToggleEdit} />
                    <Button text="삭제" onclick={onClickRemove} />
                </div>
            </div>
        </div>
    )
}