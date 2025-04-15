import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function EditModal({ isOpen, onClose, onSave, initialData }) {
  const [formData, setFormData] = useState(initialData);
  const [featureList, setFeatureList] = useState(initialData.features ? initialData.features.split("\n") : [""]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files[0]) {
      const imageUrl = URL.createObjectURL(files[0]);
      setFormData({ ...formData, [name]: imageUrl });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...formData, features: featureList.join("\n") };
    onSave(updatedData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-xl overflow-y-auto max-h-[90vh]">
          <Dialog.Title className="text-xl font-semibold mb-4">Edit Content</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Background Image</label>
                <input type="file" name="bgImage" accept="image/*" onChange={handleChange} className="mt-1 w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium">Background Color</label>
                <input type="color" name="bgColor" value={formData.bgColor} onChange={handleChange} className="mt-1 w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium">Dining Image</label>
                <input type="file" name="diningImage" accept="image/*" onChange={handleChange} className="mt-1 w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium">Dining Label</label>
                <input type="text" name="diningLabel" value={formData.diningLabel} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
              </div>

              <div>
                <label className="block text-sm font-medium">Bedroom Image</label>
                <input type="file" name="bedImage" accept="image/*" onChange={handleChange} className="mt-1 w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium">Bedroom Label</label>
                <input type="text" name="bedLabel" value={formData.bedLabel} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
              </div>

              <div>
                <label className="block text-sm font-medium">Living Room Image</label>
                <input type="file" name="livingImage" accept="image/*" onChange={handleChange} className="mt-1 w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium">Living Room Label</label>
                <input type="text" name="livingLabel" value={formData.livingLabel} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Heading 1</label>
              <input type="text" name="heading1" value={formData.heading1} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Heading 2</label>
              <input type="text" name="heading2" value={formData.heading2} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Heading 3</label>
              <input type="text" name="heading3" value={formData.heading3} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Specification 1</label>
              <input type="text" name="spec1" value={formData.spec1} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Specification 2</label>
              <input type="text" name="spec2" value={formData.spec2} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Specification 3</label>
              <input type="text" name="spec3" value={formData.spec3} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Specification 4</label>
              <input type="text" name="spec4" value={formData.spec4} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" rows={3} />
            </div>

            <div>
              <label className="block text-sm font-medium">Call to Action</label>
              <input type="text" name="cta" value={formData.cta} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Price</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" />
            </div>

          

            <div className="flex justify-end gap-2 pt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">Save</button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
