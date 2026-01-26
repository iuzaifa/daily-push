import React from 'react'
import Card from '../../../components/Card'
import { User } from 'lucide-react';
import { UsersRound } from "lucide-react";
import { DASHBOARD_STATS } from '../../../utils/data';


const SalesReport = () => {
  return (
    <>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-2 sm:gap-x-2 lg:gap-y-4 sm:gap-y-2 '>
        {DASHBOARD_STATS.map((item) => (
          <Card key={item.title} className={`${item.isChange ? "hover:bg-green-50/30" : "hover:bg-red-50/30"}`} >
              <div className="flex items-center justify-between mb-2">
                <h4 className='text-sm font-semibold text-gray-700'>{item.title}</h4>
                <span className='bg-slate-100 p-2 rounded-sm'><item.icon size={15}/></span>
              </div>
              <h3 className='text-xl font-bold text-slate-800'>{item.value}</h3>
              <p className={`text-xs font-semibold ${item.isChange ? "text-green-600" : "text-red-600"}`}>{item.change}</p>
          </Card>
        ))}
      </section>
    </>
  );
}

export default SalesReport