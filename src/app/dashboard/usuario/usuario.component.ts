import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: number;
  author: string;
  download_url: string;
  url: string;
  urlImg: string;
  email: string;
  loading = true;

  constructor(private aRoute: ActivatedRoute,
    private usuarioService: UsuarioService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      console.log(data);
      this.author = data.author;
      this.download_url = data.download_url;
      this.url = data.url;
      this.urlImg = 'https://picsum.photos/id/' + this.id + '/150/150';
      this.email = this.id + '@example.com';
      this.loading = false;
    });
  }

}
