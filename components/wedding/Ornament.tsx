export function Branch({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className={`${flip ? "-scale-x-100" : ""} ${className}`} fill="none" aria-hidden="true">
      <path d="M10 190 C60 150 90 100 150 20" stroke="#85662B" strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
      {[[45,150,-30],[70,122,-60],[92,96,-25],[115,66,-55],[136,40,-20]].map(([x,y,r],i)=>(
        <path key={i} d="M0 0 C10 -12 26 -12 34 0 C26 12 10 12 0 0Z" transform={`translate(${x} ${y}) rotate(${r})`} fill="#8A9A7B" opacity={0.55 + (i%2)*0.2} />
      ))}
      {[[58,138,40],[104,82,30]].map(([x,y,r],i)=>(
        <path key={i} d="M0 0 C8 -10 20 -10 26 0 C20 10 8 10 0 0Z" transform={`translate(${x} ${y}) rotate(${r})`} fill="#B8975A" opacity=".45" />
      ))}
      <circle cx="152" cy="18" r="5" fill="#fffefb" stroke="#B8975A" />
    </svg>
  );
}
export function Divider() {
  return (
    <div className="mx-auto my-6 flex w-40 items-center gap-3 text-gold" aria-hidden="true">
      <span className="h-px flex-1 bg-gold/50" /><span className="text-lg leading-none">❦</span><span className="h-px flex-1 bg-gold/50" />
    </div>
  );
}
