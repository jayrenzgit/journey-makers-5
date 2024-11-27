import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Modal } from './Modal';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export function SuccessModal({ isOpen, onClose, title, message }: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <FiCheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {title}
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{message}</p>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}