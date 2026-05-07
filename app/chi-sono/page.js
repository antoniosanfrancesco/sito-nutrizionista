'use client';
import ChiSono from '@/components/ChiSono';

export default function PaginaChiSono() {
  return (
    <div className='page-fade-in' style={{ paddingTop: '80px', backgroundColor: '#ffffff'}}> {/* Spazio per non finire sotto la navbar fissa */}
      <ChiSono />
    </div>
  );
}