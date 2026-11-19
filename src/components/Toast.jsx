import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const icons = { success: CheckCircle2, info: Info, error: AlertCircle };

export default function Toast() {
  const { toasts, dismiss } = useToast();
  if (!toasts.length) return null;

  return (
    <div className="toast-stack" role="status" aria-live="polite">
      {toasts.map((toast) => {
        const Icon = icons[toast.type] || CheckCircle2;
        return (
          <div className={`toast toast--${toast.type}`} key={toast.id}>
            <Icon size={19} />
            <span>{toast.message}</span>
            <button type="button" onClick={() => dismiss(toast.id)} aria-label="Dismiss notification"><X size={15} /></button>
          </div>
        );
      })}
    </div>
  );
}
