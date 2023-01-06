export function Button({text,type='submit',onclick}) {
    return (
        <button type={type} className="bg-[#efefef] border border-black box-content w-10 h-fit my-auto" onClick={onclick}>
            <span className="text-black">{text}</span>
        </button>
    )
}