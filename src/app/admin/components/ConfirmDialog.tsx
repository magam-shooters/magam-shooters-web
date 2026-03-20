'use client';

import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ConfirmDialogProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function ConfirmDialog({ isOpen, message, onConfirm, onCancel, loading }: ConfirmDialogProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <div className="text-4xl text-center mb-4"><FontAwesomeIcon icon={faTriangleExclamation} /></div>
        <h3 className="font-montserrat font-bold text-gray-800 text-center mb-2">Confirm Delete</h3>
        <p className="text-gray-500 text-sm text-center font-sans mb-6">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold text-sm transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-2 rounded-lg bg-[#FFD100] text-[#002B7F] font-semibold text-sm hover:bg-[#F0C500] transition disabled:opacity-60"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
