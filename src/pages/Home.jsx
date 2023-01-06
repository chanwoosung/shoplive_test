import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { SearchBar } from "../components/SearchBar";
import { addItem } from "../store/slices/itemSlice";
import { getDateTime } from "../util";
import { Button } from "../components/Button";
import { ItemCard } from "../components/ItemCard";
import { TypeCardForm } from "../components/TypeCardForm";
import { useSearchParams } from "react-router-dom";

export function Home() {
    // const search = new URLSearchParams(window.location.search).get("search");
    const [search,setSearch] = useSearchParams()
    const dispatch = useDispatch();
    let {item:items} = useSelector(state => state.item)
    
    const onSubmit = data => {
        dispatch(addItem({
            id: uuid(),
            title: data.title,
            likeCount: data.like,
            imageURL : data.image,
            createdAt : getDateTime()
        }));
    }

    items = items.filter((card,_) => card.title.indexOf(search.get("search")) !== -1);

    return (
        <>
            {/* <DescriptionComponent /> */}
            <div className="w-full bg-[#808080] flex desktop:mx-auto text-white justify-center">
                <div className="py-2 text-lg px-4 desktop:max-w-[1024px] w-full">SHOPLIVE</div>
                </div>
                <div className="desktop:max-w-[1024px] w-full py-4 px-4 desktop:mx-auto">
                <div className="mt-5">
                    <div>
                        <SearchBar />
                    </div>
                    <TypeCardForm onSubmit={onSubmit}>
                        <Button text="추가" />
                    </TypeCardForm>
                </div>

                <div className="py-3">아이템 - 총 {items.length | 0} 개</div>

                <div className="wrap-items tab:grid tab:grid-cols-2 gap-4 desktop:block">
                    {items.length === 0 ? (
                    <div  className="w-full flex justify-center items-center">
                        <div className="mx-auto">
                        <p className="text-2xl font-extrabold whitespace-nowrap">
                            {search.get("search")?(
                                <>
                                    검색된 아이템이 없습니다.
                                </>
                            ):(
                                <>
                                    등록된 아이템이 없습니다.
                                </>
                            )}
                        </p>
                        </div>
                    </div>
                    ) : 
                    items.map((card) => (
                    <div  key={`card_${card.id}`} >
                        <ItemCard item={card}/>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}