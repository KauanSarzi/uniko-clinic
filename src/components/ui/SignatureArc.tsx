export default function SignatureArc({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Arco externo — 270° sentido horário, do topo até a esquerda */}
      <path
        d="M 100 8 A 92 92 0 1 1 8 100"
        stroke="#C9A070"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Arco interno — mesma abertura, raio menor */}
      <path
        d="M 100 30 A 70 70 0 1 1 30 100"
        stroke="#C9A070"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}
