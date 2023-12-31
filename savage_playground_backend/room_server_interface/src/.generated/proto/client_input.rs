#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClientInput {
    #[prost(message, optional, tag = "1")]
    pub client_id: ::core::option::Option<super::common::ClientId>,
    #[prost(message, optional, tag = "2")]
    pub game_input_message: ::core::option::Option<::prost_types::Any>,
}
