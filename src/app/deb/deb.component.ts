import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-deb',
  templateUrl: './deb.component.html',
  styleUrls: ['./deb.component.css']
})
export class DebComponent implements OnInit {
  article = {
    nom: '',
    nomenclature: ''
  };
  facture = {
    date: '',
    fournisseur: '',
    article_id: '',
    quantite: 0,
    montant_ht: 0
  };
  articles = [];
  selectedFile: File | undefined ;

  constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
  //   this.loadArticles();
  // }

  // loadArticles() {
  //   this.apiService.getArticles().subscribe(data => {
  //     this.articles = data;
  //   });
  // }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // importCSV() {
  //   if (this.selectedFile) {
  //     this.apiService.importCSV(this.selectedFile).subscribe(response => {
  //       alert('CSV importé avec succès !');
  //       this.loadArticles();
  //     });
  //   }
  // }

  // addArticle() {
  //   this.apiService.addArticle(this.article).subscribe(response => {
  //     alert('Article ajouté avec succès !');
  //     this.article = { nom: '', nomenclature: '' };
  //     this.loadArticles();
  //   });
  // }

  addFacture() {
    this.apiService.addFacture(this.facture).subscribe(response => {
      alert('Facture ajoutée avec succès !');
      this.facture = { date: '', fournisseur: '', article_id: '', quantite: 0, montant_ht: 0 };
    });
  }

  generateCSV() {
    this.apiService.generateCSV().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'deb_export.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
}
