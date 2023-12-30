import { FC, ChangeEvent, useState } from 'react';

interface Props {
  setIsNewModelWindowVisible: (isVisible: boolean) => void;
}

const SubmissionBox: FC<Props> = ({ setIsNewModelWindowVisible }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
      <div
          className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsNewModelWindowVisible(false)}
      >
        <div
            className="border rounded-lg bg-white w-1/2 h-1/2 flex flex-col justify-center items-center p-4"
            onClick={(event) => event.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-2">Submit files</h2>
          <input
              type="text"
              placeholder="Add a description"
              className="border p-2 w-full mb-4 rounded-md"
          />
          <div className="border-dashed border-2 p-4 rounded-md relative">
            <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="absolute inset-0 z-10 opacity-0 cursor-pointer"
            />
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <span>Drag and drop files</span>
              <button type="button" className="px-4 py-1 border rounded-md">Select Files</button>
            </div>
            {preview && (
                <img
                    src={preview}
                    alt="File preview"
                    className="mt-4 object-contain h-24 w-full"
                />
            )}
          </div>
        </div>
      </div>
  );
};

export default SubmissionBox;
