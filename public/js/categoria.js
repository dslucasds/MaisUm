function eliminarCategoria(idForm, destino) {

    confirma = confirm("Deseja eliminar esta categoria?");

    if (confirma) {

        dadosForm = $('#' + idForm).serialize();

        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
                //Ação de sucesso
                if (data == 'true') {
                    //$('#linha'+idForm).remove();
                    $('#linha' + idForm).fadeOut(1000);
                } else {
                    alert('Não foi possível eliminar a categoria!');
                }
            },
            error: function (argument) {
                alert('Erro ao eliminar categoria!');
            }

        });

    }

    return false;
}

/**
 * Mostra e esconde o título
 * */
function mostrarEsconderTitulo() {
    $('#titulo').fadeToggle(1000);
}

/**
 * Rotina para adicionar categorias
 * */
function adicionarCategoria(destino) {
    
        dadosForm = $('#formAdd').serialize();
        nomcat = $('#nomcat').val();
        
        $('#btnSalvar').attr('disable', 'true');
        
        if (nomcat.trim() != "") {
        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
               if (data == "true") {
                   
                msg = 'categoria adcionada com sucesso!';
                $('#status').val('');
                $('#status').html('<h4 class="sucesso" >'+msg+'</h4>');
                $('#status').fadeIn(800);
                   
                   $('#nomcat').val('');
                   $('#nomcat').focus();
                   
                   //destrava o botao
                   $('#btnSalvar').removeAttr('disabled');
                   
               } else {
                   msg = 'Erro ao eliminar categoria!!';
                $('#status').val('');
                $('#status').html('<h4 class="erro" >'+msg+'</h4>');
                $('#status').fadeIn(800);
                   
                   alert('Falha ao adicionar categoria !');
               }
            },
            error: function (argument) {

                
                msg = 'Erro ao eliminar categoria!!';
                $('#status').val('');
                $('#status').html('<h4 class="erro" >'+msg+'</h4>');
                $('#status').fadeIn(800);
            }

        });
        
    } else {
        
        msg = 'Preencha todos os campos!';
        $('#status').val('');
        $('#status').html('<h4 class="erro" >'+msg+'</h4>');
        $('#status').fadeIn(800);
        
        //destrava o botao
        $('#btnSalvar').removeAttr('disabled');
    }

    return false;
    
}

function editarCategoria(destino) {
    
        dadosForm = $('#formEdit').serialize();
        nomcat = $('#nomcat').val();
        
        $('#btnEditar').attr('disable', 'true');
        
        if (nomcat.trim() != "") {
        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
               if (data == "true") {
                   
                msg = 'categoria Editada com sucesso!';
                $('#status').val('');
                $('#status').html('<h4 class="sucesso" >'+msg+'</h4>');
                $('#status').fadeIn(800);
                   
                   $('#nomcat').val('');
                   $('#nomcat').focus();
                   
                   //destrava o botao
                   $('#btnEditar').removeAttr('disabled');
                   
               } else {
                   msg = 'Erro ao editar categoria!!';
                $('#status').val('');
                $('#status').html('<h4 class="erro" >'+msg+'</h4>');
                $('#status').fadeIn(800);
                   
                   alert('Falha ao editar categoria !');
               }
            },
            error: function (argument) {

                
                msg = 'Erro ao e categoria!!';
                $('#status').val('');
                $('#status').html('<h4 class="erro" >'+msg+'</h4>');
                $('#status').fadeIn(800);
            }

        });
        
    } else {
        
        msg = 'Preencha todos os campos!';
        $('#status').val('');
        $('#status').html('<h4 class="erro" >'+msg+'</h4>');
        $('#status').fadeIn(800);
        
        //destrava o botao
        $('#btnSalvar').removeAttr('disabled');
    }

    return false;
    
}