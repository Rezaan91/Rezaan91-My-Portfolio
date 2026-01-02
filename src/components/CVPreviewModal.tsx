import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

interface CVPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CVPreviewModal = ({ open, onOpenChange }: CVPreviewModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-4 pb-2 border-b border-border">
          <div className="flex items-center justify-between pr-8">
            <DialogTitle>CV Preview</DialogTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  Open in Tab
                </a>
              </Button>
              <Button variant="default" size="sm" asChild>
                <a href="/cv.pdf" download="Rezaan_Achmat_CV.pdf">
                  <Download size={16} />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src="/cv.pdf"
            className="w-full h-full border-0"
            title="CV Preview"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CVPreviewModal;
