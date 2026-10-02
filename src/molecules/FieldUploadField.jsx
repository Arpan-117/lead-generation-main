import { useRef, useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import { cn } from '../lib/cn';

const ALLOWED_EXT = ['pdf', 'xlsx', 'xls', 'docx', 'csv'];
const ACCEPT = ALLOWED_EXT.map((e) => `.${e}`).join(',');
const MAX_BYTES = 10 * 1024 * 1024;

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function checkFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (!ALLOWED_EXT.includes(ext)) return 'Upload a PDF, XLSX, XLS, DOCX, or CSV file.';
  if (file.size > MAX_BYTES) return 'That file is larger than 10 MB. Upload a smaller one.';
  return null;
}

/**
 * MOLECULE — FileUploadField
 * Drag-and-drop / browse single-file upload. Controlled via `file`.
 * `onChange(file, errorMessage)` — file is null when removed or rejected.
 */
export function FileUploadField({ label, name, file, onChange, error }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const pick = (picked) => {
    if (!picked) return;
    const message = checkFile(picked);
    onChange(message ? null : picked, message || undefined);
  };

  return (
    <div className="mol-form-group">
      <span className="atom-form-label">{label}</span>

      {file ? (
        <div className="mol-upload__file">
          <FileText size={20} className="mol-upload__icon" aria-hidden="true" />
          <span className="mol-upload__file-name">{file.name}</span>
          <span className="mol-upload__file-size">{formatSize(file.size)}</span>
          <button
            type="button"
            className="mol-upload__remove"
            onClick={() => onChange(null)}
            aria-label={`Remove ${file.name}`}
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <label
          htmlFor={name}
          className={cn('mol-upload', dragging && 'mol-upload--drag', error && 'mol-upload--error')}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            pick(e.dataTransfer.files[0]);
          }}
        >
          <Upload size={22} className="mol-upload__icon" aria-hidden="true" />
          <span className="mol-upload__text">
            Drag a file here or <span className="mol-upload__browse">browse</span>
          </span>
          <span className="mol-upload__hint">PDF, XLSX, XLS, DOCX or CSV · max 10 MB</span>
          <input
            ref={inputRef}
            id={name}
            name={name}
            type="file"
            accept={ACCEPT}
            className="sr-only"
            onChange={(e) => {
              pick(e.target.files[0]);
              e.target.value = '';
            }}
          />
        </label>
      )}

      {error && <p className="atom-form-error" role="alert">{error}</p>}
    </div>
  );
}