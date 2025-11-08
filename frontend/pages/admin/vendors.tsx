import React, { useEffect, useState } from 'react';
import { fetchVendors, deleteVendor } from '../../utils/api';
import { Vendor } from '../../types/vendor'; // Assuming you have a Vendor type defined

const VendorsPage: React.FC = () => {
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadVendors = async () => {
            try {
                const data = await fetchVendors();
                setVendors(data);
            } catch (err) {
                setError('Failed to load vendors');
            } finally {
                setLoading(false);
            }
        };

        loadVendors();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteVendor(id);
            setVendors(vendors.filter(vendor => vendor.id !== id));
        } catch (err) {
            setError('Failed to delete vendor');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Vendors</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map(vendor => (
                        <tr key={vendor.id}>
                            <td>{vendor.name}</td>
                            <td>{vendor.contact}</td>
                            <td>
                                <button onClick={() => handleDelete(vendor.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorsPage;