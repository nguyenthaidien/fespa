import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



interface FoodNode {
  name: string;
  url?: string;  // Optional URL for nodes
  function_role?: string;  // Optional client_role for nodes
  children?: FoodNode[];
}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: 'Trang chủ',
    url: '/',
    function_role: 'dashboard',
  },
  {
    name: 'Sản lượng hạ tầng',
    url: '/hatang',
    function_role: 'hatang',
    children: [
      {
        name: 'Hạ tầng ảo hóa',
        function_role: 'hatang',
        children: [
          {name: 'Hạ tầng VM',url: '/hatang/vm', function_role: 'hatang'}, 
          {name: 'Hạ tầng NFS',url: '/hatang/nfs', function_role: 'hatang'},
          {name: 'Hạ tầng Backup-archive',url: '/hatang/backup', function_role: 'hatang'}
        ],
      // },
      // {
      //   name: 'Hạ tầng IDG',
      //   children: [
      //     {name: 'K8S tenant'}, 
      //     {name: 'K8S dedicated'},
      //     {name: 'Object Storage'},
      //     {name: 'Kafka'},
      //     {name: 'RabbitMQ'},
      //     {name: 'Redis'},
      //     {name: 'Logging'},
      //     {name: 'Search Engine'}
        
      //   ]
       },
    ],
  // },
  // {
  //   name: 'Sản lượng QTVH ',
  //   children: [
  //     {
  //       name: 'ĐHIT',
  //     },
  //     {
  //       name: 'Nội bộ ITKV5',
  //     }
  //   ],
  // },
  // {
  //   name: 'Công việc thường xuyên',
  //   children: [
  //     {
  //       name: 'Nhu cầu hạ tầng',
  //     },
  //     {
  //       name: 'Tối ưu tài nguyên',
  //     }
  //   ],
  // },
  // {
  //   name: 'Báo cáo hạ tầng',
  //   children: [
  //     {
  //       name: 'Chi tiết theo SPDV',
  //     },
  //     {
  //       name: 'Tổng hợp chi phí hạ tầng',
  //     }
  //   ],
  // },
  // {
  //   name: 'Quản trị hệ thống',
  //   children: [
  //     {
  //       name: 'Thông tin người dùng',
  //     },
  //     {
  //       name: 'Cài đặt tham số sử dụng',
  //     }
  //   ],
  },
];


@Component({
  selector: 'app-left-menu',
  imports: [    
    MatTreeModule, MatButtonModule, MatIconModule,MatToolbarModule, MatFormFieldModule, MatInputModule, FormsModule
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LeftMenuComponent {
  dataSource = EXAMPLE_DATA;
  //dataSource =  'menu-data.json';
  companyName = 'Công ty TNHH DCMS';
  //Search box
   searchQuery: string = '';
  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Tìm kiếm:', this.searchQuery);
      // TODO: Gọi API hoặc lọc dữ liệu tại đây
    }
  }

  childrenAccessor = (node: FoodNode) => node.children ?? [];
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;






}



