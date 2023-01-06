import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, editItem, removeItem } from "../store/slices/itemSlice";
import { getDateTime } from "../util";
import { Button } from "./Button";
import { ItemCardInfo } from "./ItemCardInfo";
import { TypeCardForm } from "./TypeCardForm";

export function ItemCard({item}) {
    const [isEdit,setIsEdit] = useState(false)
    const dispatch = useDispatch()
    const onClickRemove = () => {
        console.log("onclick",item)
        dispatch(
            removeItem(item)
        )
    }
    const onToggleEdit = () => {
        console.log(isEdit)
        setIsEdit(!isEdit);
    }
    const onSubmitEditCard = data => {
        console.log(data)
        dispatch(editItem({
          id: item.id,
          title: data.title,
          likeCount: data.like,
          imageURL : data.image,
          dateTime : getDateTime()
        }));
        onToggleEdit()
    }

    return (
        <div className="rounded-md w-full tab:aspect-square desktop:h-[200px] desktop:flex mb-4 desktop:mb-5 shadow-xl border box-content">
            {
                isEdit? (
                    <div className="w-full h-full flex justify-center items-center">
                        <TypeCardForm item={item} onSubmit={onSubmitEditCard} >
                            <Button text="수정"/>
                            <Button type="button" text="취소" onclick={onToggleEdit}/>
                        </TypeCardForm>
                    </div>
                ) : 
                (
                    <div className="flex w-full flex-col desktop:flex-row">
                        {/* <img className="tab:rounded-md desktop:rounded-l-md w-full tab:aspect-square desktop:w-[200px] desktop:min-w-[200px] desktop:h-[200px] object-cover" src={item.imageUrl} alt="thumbnail" /> */}
                        <div className={`flex flex-col bg-[url(${item.imageURL})] bg-center bg-cover aspect-square rounded-md desktop:rounded-l-md w-full tab:aspect-square desktop:w-[200px] desktop:min-w-[200px] desktop:h-[200px] object-cover`}>
                            <div className="flex flex-col desktop:hidden h-full">
                                <div className="w-full">
                                    <div className="rounded-md p-1 flex bg-black opacity-50 w-fit ml-auto mr-4 mt-4">
                                        <span className="text-white desktop:text-[#808080] text-base">LIKE : {item.likeCount}</span>
                                    </div>
                                </div>
                                <div className="flex justify-end py-4 px-4 mt-auto">
                                    <Button text="수정" onclick={onToggleEdit} />
                                    <Button text="삭제" onclick={onClickRemove} />
                                </div>
                                <div className="w-full">
                                    <ItemCardInfo item={item} onClickRemove={onClickRemove} onToggleEdit={onToggleEdit} />
                                </div>
                            </div>
                        </div>
                        <div className="hidden desktop:flex w-full">
                            <ItemCardInfo item={item} onClickRemove={onClickRemove} onToggleEdit={onToggleEdit} />
                        </div>
                    </div>    
                )
            }
            
        </div>
    )
}