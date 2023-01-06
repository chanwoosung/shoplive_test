import { useForm } from "react-hook-form"

export function TypeCardForm({item,onSubmit,children}) {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmitEvent = handleSubmit(data=> {
        onSubmit(data);
        reset();
    })
    return (
        <div>
            <form onSubmit={onSubmitEvent}>
                <input className="border border-slate-500" placeholder="title" {
                ...register('title',{
                    value: item?item.title:null
                })
                }/>
                <input type={'number'} className="border border-slate-500" placeholder="likeCount" {
                ...register('like',{
                    value: item?item.likeCount:null
                })
                } />
                <input className="border border-slate-500" placeholder="imageUrl" {
                ...register('image',{
                    value: item?item.imageURL:null
                })
                } />
                {children}
            </form>
        </div>
    )
}