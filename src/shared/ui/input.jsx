export default function Input({ref, type, value, onChange, placeholder}){
    return(
        <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
    )
}