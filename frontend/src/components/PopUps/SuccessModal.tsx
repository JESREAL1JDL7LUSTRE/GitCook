import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export function SuccessModal({ isOpen, onClose, title, description }: SuccessModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="p-6 rounded-lg shadow-lg max-w-sm text-center">
        <AlertDialogHeader className="flex flex-col items-center">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
          <AlertDialogTitle className="text-2xl font-bold text-gray-800 text-center">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 text-center mt-2">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6 flex justify-center sm:justify-center">
          <AlertDialogAction onClick={onClose} className="bg-green-500 hover:bg-green-600 text-white w-full">
            Done
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
